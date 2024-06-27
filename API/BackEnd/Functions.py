from bson import ObjectId,json_util as j
from flask import jsonify
from pymongo import MongoClient
import BackEnd.GlobalInfo.ResponseMessages as ResponseMessage
import BackEnd.GlobalInfo.Keys as ColabsKey

if ColabsKey.dbconn==None:
    mongoConnect=MongoClient(ColabsKey.strConnection)
    ColabsKey.dbconn=mongoConnect[ColabsKey.strDBConnection]
    dbUsers=ColabsKey.dbconn["clUsers"]
    dbClients=ColabsKey.dbconn["clClients"]

#Funcion de post clientes
def fnAuthPost(user,password):
    try:
        print("Comprobacion de credenciales")
        objQuery=dbUsers.find_one({"strUser":user,"strPassword":password})
        id=str(objQuery.get('_id'))
        if(user==objQuery.get('strUser') and password==objQuery.get('strPassword')):
            objResponse=ResponseMessage.succ200.copy()
            objResponse['Prueba']=id
            objResponse['Estatus_Acreditado']=True
            return jsonify(objResponse)
    except Exception as e:
        objResponse=ResponseMessage.err500
        objResponse["Estatus_Acreditado"]=False
        return jsonify(objResponse,e)