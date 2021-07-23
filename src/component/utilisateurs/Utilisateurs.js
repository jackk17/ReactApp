import React, { useState } from 'react'
import './utilisateurs.css'
import { Dataviewer } from '../Dataviewers';

function Utilisateurs() {

    const [nom, setnom] = useState("")
    const [prenom, setprenom] = useState("")
    const [age, setage] = useState()

    return (
        <div className="utilisateurs">
            <form>
                <div className="form-group">
                    <div>
                        Nom:
                    </div>
                    <div>
                        <input type="text" value={nom} onChange={(e)=>setnom(e.target.value)}></input>
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        prénom:
                    </div>
                    <div>
                        <input type="text" value={prenom} onChange={(e)=>setprenom(e.target.value)}></input>
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        age:
                    </div>
                    <div>
                        <input type="number" value={age} onChange={(e)=>setage(e.target.value)}></input>
                    </div>
                </div>
                <button>Soumettre</button>
            </form>
             
                <Dataviewer nom={nom} prenom={prenom} age={age}/>
        </div>
    )
}

export default Utilisateurs
