export const validateEmail = (email, errorSetter) => {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        errorSetter('Invalid email address');
        return false;
    } else {
        errorSetter('');
        return true;
    }
}

export const isEmpty = (item) => {
    let value = item.value;
    let func = item.errorSetter;
    value = value.replace(/\s+/, "");
    if (value === '') {
        func(item.label + ' cannot be empty');
        return false;
    } else {
        func('');
        return true;
    }
}

export const getDate = () => {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
}

export const validateURL = (url, errorSetter) => {
    var res = url.match(/[-a-zA-Z0-9@:%_.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_.~#?&//=]*)?/gi);
    if (res === null) {
        errorSetter('Invalid URL');
        return false;
    }
    return true;
}