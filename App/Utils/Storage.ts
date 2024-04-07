import AsyncStorage from '@react-native-async-storage/async-storage';

async function get(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key)
            .then((value) => {
                try {
                    if (value !== null) {
                        resolve(JSON.parse(value));
                    }else{
                        resolve(null);
                    }
                } catch (error) {
                    reject(error);
                }
            })
            .catch((err) => {
                reject(err);
            })
        
    })
    
}
async function set(key: string, value: Object) {
    try {
        return await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        // Error saving data
        // console.log("Could not save data: " + key, error);
    }
    // return success;
}
async function remove(key: string) {

}

async function clear() {
    try {
        return await AsyncStorage.clear(() => {
            // console.log('cleared');
        });
    } catch (error) {
        // Error saving data
        // console.log("Could not clear data ", error);
    }
}

const Storage = {
    get,
    set,
    clear,
    remove
};

export default Storage;