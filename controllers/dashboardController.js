const { UserGame, UserGameBiodata, UserGameHistory } = require("../models");

module.exports = {
  index: async (req, res) => {
    const userdata = await UserGame.findAll();
    const jumlahUser = userdata.length;
    const leaderboard = await UserGameHistory.findAll({
      order: [["score", "desc"]],
    });
    res.render("pages/home/index", { jumlahUser, leaderboard });
  },
};
