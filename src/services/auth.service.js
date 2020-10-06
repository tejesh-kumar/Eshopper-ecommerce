const API_URL = "https://testecmr.herokuapp.com/users/";

const register = (registerDetails) => {
//   return axios.post(API_URL + "register", {
//     username,
//     email,
//     password,
//   });

  return fetch(API_URL + 'register/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(registerDetails)
})
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const login = (loginDetails) => {
//   return axios
//     .post(API_URL + "login", {
//       username,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });


    return fetch(API_URL + 'login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loginDetails)
		})
			.then((response) => response.json())
			.then((data) => {
				const loginDetail = JSON.stringify(data);
				localStorage.setItem('user', loginDetail);
			})
			.catch((err) => console.log(err));
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};