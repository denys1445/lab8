function dialogWithUser() {
    let userName = prompt("Введіть ваше ім'я:");
    if (userName) {
        alert("Привіт, " + userName + "!");
    } else {
        alert("Ви не ввели ім'я.");
        return;
    }
    let continueDialog = confirm("Чи хочете ви продовжити діалог?");
    while (continueDialog) {
        let userResponse = prompt("Введіть будь-яке повідомлення або 'стоп' для завершення:");
        if (userResponse.toLowerCase() === 'стоп') {
            break;
        }
        alert("Ви ввели: " + userResponse);
        continueDialog = confirm("Чи хочете ви продовжити діалог?");
    }
}

function showDevInfo(surname, name, position='студент') {
    alert('Дану сторінку розробив ' + surname + ' ' + name + ' ' + ', який займає посаду ' + position)
}

function compareStrings() {
    string1 = prompt('Введіть перший рядок');
    string2 = prompt('Введіть другий рядок');

    if (string1 > string2) {
        alert(string1)
    }
    else if (string1 < string2) {
        alert(String2)
    }
    else if (string1 === string2) {
        alert(string1)
    }
}

// dialogWithUser();
// showDevInfo('Миронцов', 'Денис');
compareStrings();

document.body.style.backgroundColor = "lightblue";

setTimeout(() => {
    document.body.style.backgroundColor = "";
}, 30000);

document.getElementById("main-heading").innerHTML = "Змінений заголовок";
let paragraphs = document.querySelectorAll(".content span");
paragraphs[0].outerHTML = "<b>Змінений текст у першому span елементі.</b>";
paragraphs[1].textContent = "Змінений текст у другому span елементі.";

let paragraphNode = document.getElementById("paragraph").firstChild;
paragraphNode.nodeValue = "Змінений текст у параграфі.";

let textNode = document.getElementById("paragraph").firstChild;
textNode.data = "Змінений текст у параграфі з використанням data.";


document.write("<div>Цей текст вставлено за допомогою document.write</div>");

let newDiv = document.createElement("div");
let newText = document.createTextNode("Цей текст створено та додано за допомогою createElement та createTextNode");

newDiv.append(newText);

document.body.append(newDiv);

let firstDiv = document.createElement("div");
firstDiv.textContent = "Цей текст вставлено на початок body за допомогою prepend";
document.body.prepend(firstDiv);

let afterParagraph = document.createElement("div");
afterParagraph.textContent = "Цей текст вставлено після параграфа за допомогою after";
document.getElementById("paragraph").after(afterParagraph);

let newHeading = document.createElement("h2");
newHeading.textContent = "Цей заголовок замінено за допомогою replaceWith";
document.getElementById("main-heading").replaceWith(newHeading);

let contentDivs = document.querySelectorAll(".content");
if (contentDivs.length > 1) {
    contentDivs[1].remove();
}

