var user, comp, rand;/*משתנים ליוזרים*/
var a, b, c, d, e, f, g, h, i;
a = document.getElementById('_1');/* מספר המשבצות למספר מ1-9 */
b = document.getElementById('_2');
c = document.getElementById('_3');
d = document.getElementById('_4');
e = document.getElementById('_5');
f = document.getElementById('_6');
g = document.getElementById('_7');
h = document.getElementById('_8');
i = document.getElementById('_9');
let timer = 30;
let interval;
function showModal() {
    $('#myModal').modal()
}
function restartTimer() {
    if (interval) {
        clearInterval(interval);
        timer = 30;
    }
    interval = setInterval(function () {

        document.getElementById('timer').innerText = timer;
        timer = timer - 1;
    }, 1000)

}
let inputs = [a, b, c, d, e, f, g, h, i]

function start(_user) {
    $('#myModal').modal('hide')
    restartTimer();
    document.getElementById('animation').style.removeProperty('--duration')
    setTimeout(function () { document.getElementById('animation').style.setProperty('--duration', 30); })
    user = _user
    for (let _input of inputs) {
        _input.value = ''
    }

    if (user == "x") {
        comp = "o";
    }
    else {
        comp = "x";
    }
}
/**/

function setData(self) {

    if (user) {
        if (!self.value) {
            self.value = user;
        }
        setTimeout(getData, 1000);
        setTimeout(gameOver, 1300)
        document.getElementById('animation').style.removeProperty('--duration')
        setTimeout(function () { document.getElementById('animation').style.setProperty('--duration', 30); })
    } else {
        showModal();

    }
}

function getData() {

    restartTimer()

    if (((b.value == c.value && b.value == comp) ||
        (d.value == g.value && d.value == comp) ||
        (e.value == i.value && e.value == comp)) && a.value == "") {
        a.value = comp;
    }
    else if (((a.value == c.value && a.value == comp) ||
        (e.value == h.value && e.value == comp)) && b.value == "") {
        b.value = comp;
    }
    else if (((a.value == b.value && a.value == comp) ||
        (f.value == i.value && f.value == comp) || (g.value == e.value && g.value == comp)) && c.value == "") {
        c.value = comp;
    }
    else if (((a.value == g.value && a.value == comp) ||
        (e.value == f.value && e.value == comp)) && d.value == "") {
        d.value = comp;
    }
    else if (((d.value == f.value && d.value == comp) ||
        (b.value == h.value && b.value == comp) ||
        (c.value == g.value && c.value == comp)) && e.value == "") {
        e.value = comp;
    }
    else if (((d.value == e.value && d.value == comp) ||
        (c.value == i.value && c.value == comp)) && f.value == "") {
        f.value = comp;
    }
    else if (((a.value == d.value && a.value == comp) ||
        (h.value == i.value && h.value == comp) || (e.value == c.value && e.value == comp)) && g.value == "") {
        g.value = comp;
    }
    else if (((b.value == e.value && b.value == comp) ||
        (g.value == i.value && g.value == comp)) && h.value == "") {
        h.value = comp;
    }
    else if (((c.value == f.value && c.value == comp) ||
        (g.value == h.value && g.value == comp) ||
        (a.value == e.value && a.value == comp)) && i.value == "") {
        i.value = comp;
    }
    else if (((b.value == c.value && b.value == user) ||
        (d.value == g.value && g.value == user) ||
        (e.value == i.value && e.value == user)) && a.value == "") {
        a.value = comp;
    }
    else if (((a.value == c.value && a.value == user) ||
        (e.value == h.value && e.value == user)) && b.value == "") {
        b.value = comp;
    }
    else if (((a.value == b.value && a.value == user) ||
        (f.value == i.value && f.value == user) ||
        (g.value == e.value && g.value == user)) && c.value == "") {
        c.value = comp;
    }
    else if (((a.value == g.value && a.value == user) ||
        (e.value == f.value && e.value == user)) && d.value == "") {
        d.value = comp;
    }
    else if (((d.value == user && f.value == user) ||
        (b.value == user && h.value == user) ||

        (c.value == user && g.value == user)) && e.value == "") {
        e.value = comp;
    }
    else if (((d.value == e.value && d.value == user) ||
        (c.value == i.value && c.value == user)) && f.value == "") {
        f.value = comp;
    }
    else if (((a.value == d.value && a.value == user) ||
        (h.value == i.value && h.value == user) ||
        (e.value == c.value && e.value == user)) && g.value == "") {
        g.value = comp;
    }
    else if (((b.value == e.value && b.value == user) ||
        (g.value == i.value && g.value == user)) && h.value == "") {
        h.value = comp;
    }
    else if (((c.value == f.value && c.value == user) ||
        (g.value == h.value && g.value == user) ||
        (a.value == e.value && a.value == user)) && i.value == "") {
        i.value = comp;
    }
    else {
        rand = Math.floor(Math.random() * 9);/*בעת בחירה שלי של ממשבצת מ1-9 הוא מבצע בחירה רנדולמית
         למספר גם לשם הגעה לניצחון */
        if (rand == 0) {
            if (a.value == "") {
                a.value = comp;
            }
            else {
                if (b.value == "") {
                    b.value = comp;
                }
                else if (c.value == "") {
                    c.value = comp;
                }
                else if (d.value == "") {
                    d.value = comp;
                }
                else if (e.value == "") {
                    e.value = comp;
                }
                else if (f.value == "") {
                    f.value = comp;
                }
                else if (g.value == "") {
                    g.value = comp;
                }
                else if (h.value == "") {
                    h.value = comp;
                }
                else if (i.value == "") {
                    i.value = comp;
                }
            }
        }
        else if (rand == 1) {
            if (b.value == "") {
                b.value = comp;
            }
            else {
                if (a.value == "") {
                    a.value = comp;
                }
                else if (c.value == "") {
                    c.value = comp;
                }
                else if (d.value == "") {
                    d.value = comp;
                }
                else if (e.value == "") {
                    e.value = comp;
                }
                else if (f.value == "") {
                    f.value = comp;
                }
                else if (g.value == "") {
                    g.value = comp;
                }
                else if (h.value == "") {
                    h.value = comp;
                }
                else if (i.value == "") {
                    i.value = comp;
                }
            }
        }
        else if (rand == 2) {
            if (c.value == "") {
                c.value = comp;
            }
            else {
                if (a.value == "") {
                    a.value = comp;
                }
                else if (b.value == "") {
                    b.value = comp;
                }
                else if (d.value == "") {
                    d.value = comp;
                }
                else if (e.value == "") {
                    e.value = comp;
                }
                else if (f.value == "") {
                    f.value = comp;
                }
                else if (g.value == "") {
                    g.value = comp;
                }
                else if (h.value == "") {
                    h.value = comp;
                }
                else if (i.value == "") {
                    i.value = comp;
                }
            }
        }
        else if (rand == 3) {
            if (d.value == "") {
                d.value = comp;
            }
            else {
                if (a.value == "") {
                    a.value = comp;
                }
                else if (b.value == "") {
                    b.value = comp;
                }
                else if (c.value == "") {
                    c.value = comp;
                }
                else if (e.value == "") {
                    e.value = comp;
                }
                else if (f.value == "") {
                    f.value = comp;
                }
                else if (g.value == "") {
                    g.value = comp;
                }
                else if (h.value == "") {
                    h.value = comp;
                }
                else if (i.value == "") {
                    i.value = comp;
                }
            }
        }
        else if (rand == 4) {
            if (e.value == "") {
                e.value = comp;
            }
            else {
                if (a.value == "") {
                    a.value = comp;
                }
                else if (b.value == "") {
                    b.value = comp;
                }
                else if (c.value == "") {
                    c.value = comp;
                }
                else if (d.value == "") {
                    d.value = comp;
                }
                else if (f.value == "") {
                    f.value = comp;
                }
                else if (g.value == "") {
                    g.value = comp;
                }
                else if (h.value == "") {
                    h.value = comp;
                }
                else if (i.value == "") {
                    i.value = comp;
                }
            }
        }
        else if (rand == 5) {
            if (f.value == "") {
                f.value = comp;
            }
            else {
                if (a.value == "") {
                    a.value = comp;
                }
                else if (b.value == "") {
                    b.value = comp;
                }
                else if (c.value == "") {
                    c.value = comp;
                }
                else if (d.value == "") {
                    d.value = comp;
                }
                else if (e.value == "") {
                    e.value = comp;
                }
                else if (g.value == "") {
                    g.value = comp;
                }
                else if (h.value == "") {
                    h.value = comp;
                }
                else if (i.value == "") {
                    i.value = comp;
                }
            }
        }
        else if (rand == 6) {
            if (g.value == "") {
                g.value = comp;
            }
            else {
                if (a.value == "") {
                    a.value = comp;
                }
                else if (b.value == "") {
                    b.value = comp;
                }
                else if (c.value == "") {
                    c.value = comp;
                }
                else if (d.value == "") {
                    d.value = comp;
                }
                else if (e.value == "") {
                    e.value = comp;
                }
                else if (f.value == "") {
                    f.value = comp;
                }
                else if (h.value == "") {
                    h.value = comp;
                }
                else if (i.value == "") {
                    i.value = comp;
                }
            }
        }
        else if (rand == 7) {
            if (h.value == "") {
                h.value = comp;
            }
            else {
                if (a.value == "") {
                    a.value = comp;
                }
                else if (b.value == "") {
                    b.value = comp;
                }
                else if (c.value == "") {
                    c.value = comp;
                }
                else if (d.value == "") {
                    d.value = comp;
                }
                else if (e.value == "") {
                    e.value = comp;
                }
                else if (f.value == "") {
                    f.value = comp;
                }
                else if (g.value == "") {
                    g.value = comp;
                }
                else if (i.value == "") {
                    i.value = comp;
                }
            }
        }
        else if (rand == 8) {
            if (i.value == "") {
                i.value = comp;
            }
            else {
                if (a.value == "") {
                    a.value = comp;
                }
                else if (b.value == "") {
                    b.value = comp;
                }
                else if (c.value == "") {
                    c.value = comp;
                }
                else if (d.value == "") {
                    d.value = comp;
                }
                else if (e.value == "") {
                    e.value = comp;
                }
                else if (f.value == "") {
                    f.value = comp;
                }
                else if (g.value == "") {
                    g.value = comp;
                }
                else if (h.value == "") {
                    h.value = comp;
                }
            }
        }
    }
}
let timeout;

function gameOver() {
    if ((a.value == b.value && b.value == c.value && a.value == user) ||
        (d.value == e.value && e.value == f.value && d.value == user) ||
        (g.value == h.value && h.value == i.value && g.value == user) ||
        (a.value == d.value && d.value == g.value && d.value == user) ||
        (b.value == e.value && e.value == h.value && b.value == user) ||
        (c.value == f.value && f.value == i.value && c.value == user) ||
        (a.value == e.value && e.value == i.value && a.value == user) ||
        (c.value == e.value && e.value == g.value && c.value == user)) {
        alert("YOU WIN!!!");
        if (interval) {
            clearInterval(interval);
            timer = 30;
            document.getElementById('animation').style.removeProperty('--duration')
        }/*הקפצת ההתראה בעת ניצחון*/
    }
    else if ((a.value == b.value && b.value == c.value && a.value == comp) ||
        (d.value == e.value && e.value == f.value && d.value == comp) ||
        (g.value == h.value && h.value == i.value && g.value == comp) ||
        (a.value == d.value && d.value == g.value && d.value == comp) ||
        (b.value == e.value && e.value == h.value && b.value == comp) ||
        (c.value == f.value && f.value == i.value && c.value == comp) ||
        (a.value == e.value && e.value == i.value && a.value == comp) ||
        (c.value == e.value && e.value == g.value && c.value == comp)) {
        alert("YOU LOSE:(");
        if (interval) {
            clearInterval(interval);
            timer = 30;
            document.getElementById('animation').style.removeProperty('--duration')
        }
        /*הקפצת ההתראה לאחר הפסד*/
    }
    else if (a.value != "" && b.value != "" && c.value != "" && d.value != "" && e.value != "" && f.value != "" && g.value != "" && h.value != "" && i.value != "") {
        alert("DRAW!!")
        if (interval) {
            clearInterval(interval);
            timer = 30;
            document.getElementById('animation').style.removeProperty('--duration')
        }
        /*במצב של תיקו
        */
    }
    else {


        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            alert("You haven't played for 30 seconds - YOU LOSE:(");/*אם אני לא עושה אף מהלך ב30 שניות מוקפץ לי ההתראה ל הפסד
            */
            start();
        }, 30 * 1000)

    }
}
