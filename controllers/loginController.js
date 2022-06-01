const dummyAdmin = [];

module.exports = {
  index: (req, res) => {
    res.render("pages/login/login", { layout: "layouts/login" });
  },

  create: (req, res) => {
    const { email, password } = req.body;

    dummyAdmin.push({
      email,
      password,
    });
    console.log(dummyAdmin);
    if (email === "admin@admin.com" && password === "admin") {
      res.redirect("/admin/");
    } else {
      res.redirect("/");
    }
  },
};
