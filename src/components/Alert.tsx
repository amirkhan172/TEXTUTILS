import React from 'react'

const Alert = ({alert, Greenish}: props) => {

    // function to capitalized the first letter
        const capitalized = (word)=>{
            const lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1).toLowerCase() 
        }

    return (
        <div>
            {alert && alert.msg && (
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalized(alert.type)}</strong>: {alert.msg}
            </div>
            )}
            {Greenish && Greenish.msg && (
                <div className={`alert alert-${Greenish.type} mx-3 alert-dismissible fade show`} role="alert">
                <strong>{capitalized(Greenish.type)}</strong>: {Greenish.msg}
            </div>
            )}
        </div>
    )
}

export default Alert

interface props{
    alert: any;
    Greenish: any;
}

// Tutorial 13 Adding alert amd auto dismissing alert 
// is tutorial mai ham ne textForm ke sare buttons ke liye alert lagaye hai.dark mode or light mode ke liye alert lagaye hai. or wo alert 1.5seconds ke bad khud he ghaib hojaye to uske liye settimeout lagaya hai.hooks(useState) ka use kiya hai.pehla letter cpaital krne ke liye function likha hai.is alert ko ham bootstrap se lekr aye hai.
// "{alert (&&)}" ka matlab ye hai ke "alert" agr true hoga to agay jo b kuch likha hai wo execute hoga.or agr "alert" false hoga to agay kuch b execute nhi hoga.
// "<strong>{alert.type}</strong>: {alert.msg}" iska matlab ye hai ke "alert.type" mai jo kuch hai pehle wo print hoga. or pir colon ":" print hoga.or pir alert.msg mai jo kuch hai wo alert mai aaega.
// capitalized function hm ne is liye use kiya hai takay hamare alert.type ka pehla letter capital ho jaye.
// alert: any; any type TypeScript mein ek special type hai jo kisi bhi type ko represent karta hai. Jab aap kisi variable ya property ko any type se define karte hain, toh TypeScript us variable ya property ke type ko check nahi karta hai.