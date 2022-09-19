interface IRequestParameter {
  email?: string,
  password?: string,
  sessionID?: string,
  productID?: string,
  cafeID?: string,
}

export const serverRequest = (url: string, parameter: IRequestParameter | string | undefined) => { 
  return request(url, parameter)
  .then((r) => r.json())
  .catch(function(error) {
    console.log(error)
  });
};

export const request = (url: string, parameter: IRequestParameter | string | undefined) => { 
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(parameter)
  })
} 