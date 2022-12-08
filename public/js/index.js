const headerUserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('#name');

const localUserName = localStorage.getItem('userName');

const setUserNameInnerHtml = (name) => {
  headerUserNameElement.innerHTML = `${name} <span>님</span>`;
  userNameElement.textContent = name;
};

if (localUserName) {
  setUserNameInnerHtml(localUserName);
}

userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세여.');
  localStorage.setItem('userName', userName);

  setUserNameInnerHtml(userName);
};

const userIdEmailElement = document.querySelector('#id');
const localUserIdEmail = localStorage.getItem('email');

const setUserIdEmailInnserHtml = (idEmail) =>{
  userIdEmailElement.innerHTML = `${idEmail}`;
  localUserIdEmail.textContent = idEmail;
};

if (localUserIdEmail) {
  setUserIdEmailInnserHtml(localUserIdEmail);
}

userIdEmailElement.onclick = () => {
  const userIdEmail = prompt('학번과 이메일을 입력하세요. (/로 나누어 입력)');
  localStorage.setItem('userIdEmail', userIdEmail);

  setUserIdEmailInnserHtml(userIdEmail);
};
