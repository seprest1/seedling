import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
//components
import PlantName from './PlantName';

function SelectedPlants(){
    const history = useHistory();
    const selectedPlants = useSelector(store => store.garden.selectedPlants);

    return(
        
        <div className="right_body">
            <ul className="plant_list"> 
                {selectedPlants.map((plant, i) => 
                    <PlantName plant={plant} key={i} i={i}/>)}
            </ul>
            <div className="buttons">
                <button onClick={() => history.push('/newplot/shade')} className="button">Back</button>
                <button onClick={() => history.push('/newplot/plants')} className="button">Next</button>
            </div>
        </div>
    )
}

export default SelectedPlants;