const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    characters: { type: String },
});

module.exports = mongoose.model('User', userSchema);

/* 
userName: String,
memberID: String,
firstName: String,
lastName: String,
email: String,
avatar: String,
twitter: String,
instagram: String,
discord: String,
dateOfBirth: Date,
password: String,
charactersOwned: [{characterName: String, characterID: String}],
savedSheets: [fileName: String, sheetID: String],
superGroups: [{groupName: String, accessPrivilege: String, groupID: String}],
villainsOwned: [{villainName: String, villainID: String}].
campaignsCreated: [{cammpaignName: String, accessPrivilege: String, campaignID: String}]
customContent: {
    principles: [],
    abilities: []
}
 */
