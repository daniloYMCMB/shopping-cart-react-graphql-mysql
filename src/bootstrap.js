module.exports = async () => {

    const Order = require('./models/Order');
    const User = require('./models/User');

    User.hasMany(Order, { as: "Orders", foreignKey: 'userId' });
    Order.belongsTo(User, { as: "User", foreignKey: 'userId' });

    const errHandler = err => {
        console.log("Error: ", err)
    };

    const user = await User.create({ 
        username: "alex4", 
        passwd: "123" 
    }).catch(errHandler);
    
    const order = await Order.create({
        content: "This is actually the order content from Iphone",
        userId: user.id
    }).catch(errHandler);

    const users = await User.findAll({ 
        where: { username: "alex" }, 
        include: [{ model: Order, as: "Orders" }]
    }).catch(errHandler);

    console.log("Alex Orders: ", users)
};