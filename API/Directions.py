#Importacion de librerías
import os
from flask import Flask,jsonify,request
from flask_cors import CORS, cross_origin
import BackEnd.Functions as CallMethod
import BackEnd.GlobalInfo.ResponseMessages as ResponseMessage
import ssl
#Instancia
app=Flask(__name__)
CORS(app,resources={r"/*":{"origins":"*"}})


@app.route('/', methods=['GET'])
@cross_origin(allow_headers=['Content-Type'])
def prueba():
    try:
        objResult=CallMethod.fnPruebaDeploy()
        return objResult
    except Exception as e:
        print("Error en prueba deploy",e)
        return jsonify(ResponseMessage.err500)

@app.route('/auth', methods=['GET','POST'])
@cross_origin(allow_headers=['Content-Type'])
def authPost():
    try:
        print("Content-Type:", request.content_type)
        if request.is_json:
            data=request.get_json()
            user=data.get('user')
            password=data.get('password')
            print(user,password)
            objResult=CallMethod.fnAuthPost(user,password)
            return objResult
        else:
            return jsonify({"Error:":"Tipo no soportado"})
    except Exception as e:
        print("Error en auth",e)
        return jsonify(ResponseMessage.err500)

@app.route('/register', methods=['POST'])
@cross_origin(allow_headers=['Content-Type'])
def registerUser():
    try:
        user=request.json['user']
        password=request.json['password']
        objectResult=CallMethod.fnRegisterUser(user,password)
        return objectResult
    except Exception as e:
        print("Error en register direction")
        return jsonify(ResponseMessage.err500)


app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', 'http://localhost:4200')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  response.headers.add('Access-Control-Allow-Credentials', 'true')
  return response

if __name__=='__main__':
    #context=ssl.SSLContext(ssl.PROTOCOL_TLS)
    #context.load_cert_chain(certfile='./cert.pem', keyfile='./key.pem')
    #, port=5000, debug=True, threaded=True
    port=int(os.environ.get("PORT",500))
    app.run(host="0.0.0.0", port=port)