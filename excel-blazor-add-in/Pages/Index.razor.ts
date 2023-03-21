/* Copyright(c) Maarten van Stam. All rights reserved. Licensed under the MIT License. */

 (window as any).lancerchaîné = async (event) => {
        // see https://sourcegraph.com/github.com/aspnet/AspNetCore@bd65275148abc9b07a3b59797a88d485341152bf/-/blob/src/Components/Web.JS/src/Boot.Server.ts#L41:9

        console.log("lancerchaîné");
        await callStaticLocalComponentMethod();
        console.log("nod");   
        event.completed();
    }
//}
async function callStaticLocalComponentMethod() {
    //window.dispatchEvent(new Event('myEvent'));
    console.log("avant");
    try {               
        var dato = "init";
        dato =await DotNet.invokeMethodAsync("BlazorAddIn", "Localfunction");                                       
        console.log("fin demarrage : " + dato);
    }
    catch (err) {
        console.log();
        console.log("erreur : " + err.message);      
    }
    finally {       
        console.log("après");
    }
}
