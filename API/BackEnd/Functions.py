import bcrypt
from bson import ObjectId,json_util as j
from flask import jsonify
from pymongo import MongoClient
from pymongo.server_api import ServerApi
import BackEnd.GlobalInfo.ResponseMessages as ResponseMessage
import BackEnd.GlobalInfo.Keys as ColabsKey

if ColabsKey.dbconn==None:
    mongoConnect=MongoClient(ColabsKey.strConnection,server_api=ServerApi('1'))
    ColabsKey.dbconn=mongoConnect[ColabsKey.strDBConnection]
    dbUsers=ColabsKey.dbconn["clUsers"]
    dbClients=ColabsKey.dbconn["clClients"]
# Función para cifrar la contraseña
def hash_password(password):
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

# Función para verificar la contraseña
def check_password(hashed_password, password):
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password)

#Funcion de post clientes
def fnAuthPost(user,password):
    try:
        print("Comprobacion de credenciales")
        objQuery=dbUsers.find_one({"strUser":user})
        id=str(objQuery.get('_id'))
        if objQuery and check_password(objQuery.get('strPassword'),password):
            id = str(objQuery.get('_id'))
            objResponse = ResponseMessage.succ200.copy()
            objResponse['Prueba'] = id
            objResponse['Estatus_Acreditado'] = True
            return jsonify(objResponse)
    except Exception as e:
        objResponse=ResponseMessage.err500
        objResponse["Estatus_Acreditado"]=False
        return jsonify(objResponse,e)

def fnRegisterUser(user,password):
    try:
        objectQuery=dbUsers.find_one({"strUser":user})
        print(objectQuery)
        if objectQuery and objectQuery.get('strUser')==user:
            objResponse=ResponseMessage.err203
            objResponse['Estado']=False
            print(objResponse)
            return jsonify(objResponse)
        else:
            hashed_password=hash_password(password)
            dbUsers.insert_one({"strUser":user,"strPassword":hashed_password,"strRole":"user"})
            objResponse=ResponseMessage.succ200
            objResponse["Estado"]=True
            return jsonify(objResponse)
    except Exception as e:
        return jsonify(e)