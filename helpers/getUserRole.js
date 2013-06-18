exports.getRoleFromSecret = function(secret,contributors){ 
        
        var user = getUserFromSecret(secret,contributors);
        var guest = getGuestFromSecret(secret,contributors);
        var admin = getAdminFromSecret(secret,contributors);
        var contibutor = admin.length>0 ? setContibutorDetails("admin",admin[0]) : 
        user.length>0? setContibutorDetails("user",user[0]):
        guest.length>0?setContibutorDetails("guest",guest[0]):false;
        return contibutor;
};

function getUserFromSecret(secret,contributors){
    
    return contributors.users.filter(function(user){return user.secret===secret;});
}

function getAdminFromSecret(secret,contributors){
    
   return contributors.admins.filter(function(admin){return admin.secret===secret;});
}

function getGuestFromSecret(secret,contributors){
    
    return contributors.guests.filter(function(guest){return guest.secret===secret;});
}

function setContibutorDetails (role,data){
    
    var contributor = {
        
        role : role,
        details : data
    };
    
    return contributor;
}