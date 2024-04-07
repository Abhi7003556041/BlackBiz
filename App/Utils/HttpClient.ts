import RNFetchBlob from 'rn-fetch-blob';
import Storage from './Storage';
import RNFS from 'react-native-fs'
import { ImageOrVideo } from 'react-native-image-crop-picker';

const BASE_URL = 'http://142.93.55.214:3089/api/v1/';

const get = (endpoint: string): Promise<any> => {
  return request(endpoint);
};

interface TokenInterface {
  token: string;
}

const post = (endpoint: string, params: Object | null = null): Promise<any> => {
  return request(endpoint, params, 'POST');
};

const put = (endpoint: string, params: Object | null = null): Promise<any> => {
  return request(endpoint, params, 'PUT');
};

const deletee = (endpoint: string): Promise<any> => {
  return request(endpoint, {}, 'DELETE');
};

const request = async (
  endpoint: string,
  params: Object | null = null,
  method: string = 'GET',
): Promise<any> => {
  var xmlRequest = new XMLHttpRequest();
  let url = BASE_URL + endpoint;
  console.log('url', url);

  let token: string = await Storage.get('Token');

  return new Promise((resolve, reject) => {
    xmlRequest.open(method, url, true);
    console.log('tokem', token);
    xmlRequest.setRequestHeader('Accept', '/');
    xmlRequest.setRequestHeader('Content-Type', 'application/json');
    xmlRequest.setRequestHeader('Authorization', token);
    xmlRequest.setRequestHeader('userType', 'User');

    if (method == 'GET') {
      xmlRequest.send();
    } else {
      xmlRequest.send(JSON.stringify(params));
    }

    xmlRequest.onreadystatechange = function () {
      // Call a function when the state changes.
      // console.log("xmlRequest.response",xmlRequest.response)
      if (xmlRequest.readyState === XMLHttpRequest.DONE) {
        if (xmlRequest.status === 200) {
          resolve(JSON.parse(xmlRequest.response));
        } else {
          try {
            console.log('xmlRequest.response', xmlRequest.response);
            reject(JSON.parse(xmlRequest.response));
          } catch (err) {
            reject({
              error: 'Server Error Please try again later !!!',
              actError: err,
            });
          }
        }
      }
    };
  });
};

const singleFileUpload = async (
  endpoint: string,
  // method: string,
  files: ImageOrVideo,
) : Promise<any> => {
  let token: string = await Storage.get('Token');
  let url = BASE_URL + endpoint;
  let get_originalname = getOriginalname(files.path);
  let Base64Image: string = await RNFS.readFile(files.path, 'base64');

  console.log('original name',get_originalname,files)
  console.log("Base64Image", `data:${files.mime};base64,${Base64Image}`)
  return new Promise((resolve, reject) => {
    RNFetchBlob.fetch(
      'POST',
      url,
      {
        Accept: '/',
        'Content-Type': 'application/octet-stream',
        'cache-control': 'no-cache',
        Authorization: token,
        userType: 'User',
        originalname: get_originalname,
        minetype: `${files.mime}`,
        replacetype: `data${files.mime}base64`,
      },
      `data:${files.mime},base64,${Base64Image}`
    )
      .then(result => {
        console.log('amar baler result',{
          Accept: '/',
          'Content-Type': 'application/octet-stream',
          'cache-control': 'no-cache',
          Authorization: token,
          userType: 'User',
          originalname: get_originalname,
          minetype: `${files.mime}`,
          replacetype: `data${files.mime}base64`,
        },
        `data:${files.mime};base64,${Base64Image}`)
        try {
          resolve(JSON.parse(result.data));
        } catch (error) {
          reject(error);
        }
        console.log('dfdff',result.data)
      })
      .catch(error => {
        reject(error);
      });
  });
}

const getOriginalname = (data: string): string  => {
  let arr = data.split('/');
  let lent = Number(arr.length - 1);
  return arr[lent];
};

const HttpClient = {get, post, put, deletee, singleFileUpload};
export default HttpClient;
