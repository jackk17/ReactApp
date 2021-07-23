import React from 'react'

function Dataviewer({nom,prenom, age}){
    return (
        <div>
            <div className="form-group">
                <div>
                    Nom
                </div>
                <div>
                  {nom}
                </div>
            </div>
            <div className="form-group">
                <div>
                    Prenoms
                </div>
                <div>
                   {prenom}
                </div>
            </div>
            <div className="form-group">
                <div>
                    Age
                </div>
                <div>
                    {age}
                </div>
            </div>
        </div>
    )
}

export default Dataviewer
