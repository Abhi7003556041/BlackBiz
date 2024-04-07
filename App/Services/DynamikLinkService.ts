const buildLink = async (url: string) => {
  let requestOptions = {
    dynamicLinkInfo: {
      domainUriPrefix: 'https://blackbizapp.page.link',
      link: url,
      androidInfo: {
        androidPackageName: 'com.blackbizapp',
      },
    },
  };
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  return fetch(
    'https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyBWZxprxPwLQ0aj28NO2hXt27KMHDKL3f4',
    {
      headers: myHeaders,
      body: JSON.stringify(requestOptions),
      method: 'POST',
    },
  )
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
};

const DynamicLinkService = {
  buildLink,
};

export default DynamicLinkService;
