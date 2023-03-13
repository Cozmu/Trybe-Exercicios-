const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING, 
  });
  
  (async () => {
    await sequelize.sync({ force: true });
    // const sara = User.build({
    //   fullName: 'Sara Silva Santos',
    //   email: 'sara.ss@trybe.com',
    // });
    // await sara.save();

    // const sara = await User.create({ // PARA CRIAR
    //   fullName: 'Sara Silva Santos',
    //   email: 'sara.ss@trybe.com',
    // });

    // const jane = await User.create({ 
    //   fullName: "Jane Doe",
    //   email: "jane.doe@trybe.com",
    // });
    // jane.email = "ada.doe@trybe.com";
    // await jane.update({ fullName: "Ada Joe" }); // PARA ATUALIZAR
    // await jane.save();

    // const mario = await User.create({ fullName: "Mario Bors" }); // PARA EXCLUIR
    // await mario.destroy();


  })();

  return User;
};
  
module.exports = UserModel;