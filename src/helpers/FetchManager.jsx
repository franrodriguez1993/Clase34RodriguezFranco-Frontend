class FetchContainer {
  constructor() {}

  async getData(url) {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }
  async postData(url, body) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
      });

      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }
  async updateData(url, body) {
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
      });
      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }
  async deleteData(url) {
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  }

  async Login(url, username, password) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }

  async refreshLogin(url, data) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }
  async UploadFiles(url, data) {
    try {
      const res = await fetch(url, {
        method: "PUT",
        body: data,
        credentials: "include",
      });

      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }
}

export const FetchManager = new FetchContainer();
