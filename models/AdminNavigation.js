module.exports = (sequelize, DataTypes) => {
    const AdminNavigation = sequelize.define("AdminNavigation", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      navigation : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      icon : {
        type: DataTypes.STRING,
        allowNull: false,
      },     
      treeview : {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['1', '2'],
        comment: '1=True, 2=False'
      }, 
      parent: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orderby: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }, 
      status : {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['1', '2'],
        comment: '1= Active, 2= Deactivate'
      },                        
    });
  
    return AdminNavigation;
  };
  

  