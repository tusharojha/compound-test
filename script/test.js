const Unitroller = artifacts.require("Unitroller");

module.exports = async () => {
    const [owner, other] = await web3.eth.getAccounts();
    const unitroller = await Unitroller.at('0xC785B5594a6AbB9C57Cf55388e83c923e5dD7F88');

    const data = await unitroller._setPendingImplementation(other);
    console.log('data', data)

    const acceptingImplementation = await unitroller._acceptImplementation();
    console.log('acceptingImplementation', acceptingImplementation)
}
