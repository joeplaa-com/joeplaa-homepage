export function getAge (dateCheck, dateBase?) {
    var today;
    dateBase ? today = new Date(dateBase) : today = new Date();
    var birthDate = new Date(dateCheck);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};
