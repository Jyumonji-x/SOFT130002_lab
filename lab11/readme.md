# document

许同樵 19302010015  

The Last Lab! ✌

## 1. The function of cookie and session  

### 1.1 cookie

set a cookie

> setcookie(name,value,expiry time);(expiry time is not necessary)

When the expiry time is a present time, then the cookie would be deleted

read a cookie

> $_COOKIE\[name\]

### 1.2 session

start the session before other commands

> session_start()

destroy the command

> session_destroy()

set or read a session

> $_SESSION\[name\]

unset the session

> unset($_SESSION\[name\]);

## 2. The advantages & disadvantages of cookie and session.  

## 2.1 cookie

It directly use the cookies, so some details such as the expiry time can be set easily with commands.

The cookies would be saved in the users' browser, so maybe it's not that safe.

## 2.2 session

Sessions are safer than cookies because they're saved in the server.

But at the same time, it would waste the spaces of the server.

To meet the need of the big websites, sessions are always saved in a main server. But once it breaks down, sessions wouldn't be used, which is fatal.

Session partly relies on cookie.


In all, session is safer while cookie is faster. 