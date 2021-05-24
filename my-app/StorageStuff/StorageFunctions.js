import AsyncStorage from '@react-native-async-storage/async-storage';



export const storeMyStuff=async(key, stuff)=>{
    try{
        AsyncStorage.setItem(key, JSON.stringify(stuff));
        return true;
    }catch(e){
        alert("Einstellungen speichern fehlgeschlagen");
    }
};

export const getMyStuff=(key)=>{
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem(key).then(value=>{
            if(value!=null){
                resolve(value);
            }else{
                reject(Error("Beim Einstellungs-Daten laden ist was schiefgelaufen"));
            }
        });
    }); 
};