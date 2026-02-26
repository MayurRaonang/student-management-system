function login(user) {
    if (user.type === "student") return "Student Home";
    return "Unauthorized";
}
module.exports = login;
