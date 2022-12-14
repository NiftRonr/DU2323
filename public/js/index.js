// 이름변경
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

// 학번 변수 시작
const userIdElement = document.querySelector('#id-num');
const localUserId = localStorage.getItem('userId');

const setUserIdEmailInnserHtml = (Id) =>{
  userIdElement.innerHTML = `${Id}`;
  localUserId.textContent = Id;
};

if (localUserId) {
  setUserIdEmailInnserHtml(localUserId);
}

userIdElement.onclick = () => {
  const userId = prompt('학번을 입력하시오.');
  const regExp = /^[0-9]*$/;
  const nullCheck ='';

  if (!regExp.test(userId)) {
    alert('숫자만 입력 가능합니다. 다시 입력해주세요.');
  } else if (userId == nullCheck) {
    alert('학번을 입력하세여.');
  } else if (userId.length !==9 ) {
    alert('학번은 9자입니다.');
  } else {
    localStorage.setItem('userId', userId);
    setUserIdEmailInnserHtml(userId);
  }
};
// email 변수 시작
const userEmailElement = document.querySelector('#email');
const localUserEmail = localStorage.getItem('userEmail');

const setUserEmailInnserHtml = (email) =>{
  userEmailElement.innerHTML = `${email}`;
  localUserEmail.textContent = email;
};

if (localUserEmail) {
  setUserEmailInnserHtml(localUserEmail);
}

userEmailElement.onclick = () => {
  const userEmail = prompt('이메일을 입력하시오.');

  const regExp =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  if (!regExp.test(userEmail)) {
    alert('이메일 형식이 아닙니다. 다시 입력해주세요.');
  } else {
    localStorage.setItem('userEmail', userEmail);
    setUserEmailInnserHtml(userEmail);
  }
};
