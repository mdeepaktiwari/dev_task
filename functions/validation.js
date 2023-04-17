export const validation = function (name, phone, email) {
  //   validate name
  if (name.length > 50) {
    return "Name must be less than 50 character";
  }

  // check uniqueness of phone and email
  const list = JSON.parse(window.localStorage.getItem("allUsers"));
  for (let i = 0; i < list.length; i++) {
    let e = list[i];
    // validate duplicate phone
    if (e.phone == phone) {
      return "Phone number must be unique";
    }
    // validate duplicate email
    if (e.email == email) {
      return "Email must be unique";
    }
  }

  //   if user details validated return true
  return true;
};
