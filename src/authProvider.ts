import { AuthProvider } from "react-admin";

const apiUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:8080";

const getRolesFromToken = (token: string): string => {
  const payload = token.split(".")[1];
  const decodedPayload = JSON.parse(atob(payload));
  const rolesString = decodedPayload["roles"];
  return rolesString || "";
};

export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    const request = new Request(`${apiUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ user, jwt }) => {
        localStorage.setItem("username", user["username"]);
        localStorage.setItem("jwt", jwt);
        localStorage.setItem("roles", getRolesFromToken(jwt));
      });
  },

  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("username");
    localStorage.removeItem("jwt");
    localStorage.removeItem("roles");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      localStorage.removeItem("jwt");
      localStorage.removeItem("roles");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("jwt") ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    const roles = localStorage.getItem("roles")?.split(" ");
    if (roles) return Promise.resolve({ roles: roles });
    return Promise.reject()
  },
};
