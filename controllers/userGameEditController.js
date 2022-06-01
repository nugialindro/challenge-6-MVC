const { UserGame, UserGameBiodata, UserGameHistory } = require("../models");

module.exports = {
  show: async (req, res) => {
    const usergame = await UserGame.findOne({
      where: { id: req.params.id },
      include: "UserGameBiodata",
    });
    res.render("pages/admin/edit", {
      pageTitle: "Edit User",
      usergame,
    });
  },
};
