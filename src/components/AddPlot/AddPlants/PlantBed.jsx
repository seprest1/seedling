import { useDispatch, useSelector } from 'react-redux';

function PlantBed(){
    const plot = useSelector(store => store.garden.divs);
    const plant = useSelector(store => store.garden.pickedPlant);
    const month = useSelector(store => store.garden.date.display);

    //set and send plant values for plot reducer
    const dispatch = useDispatch();
    const setDiv = (div) => {
      if (div.shade === plant.shade){    //prevents user from planting in the wrong shade zone
        const divToSend = {
            location: div.location, 
            plant_id: plant.id, 
            name: plant.name, 
            color: plant.color,
            subvariety: plant.subvariety,
            icon: plant.icon};

        dispatch({
          type: 'SET_PLANT',
          payload: divToSend,
        });
        
      };
    };

    //change background of plot to match shade value (except in brown)
    const changeBackground = (div) => {
      switch(div.shade){
        case 'Full Sun':
          return 'shade1';
        case 'Partial Sun':
          return 'shade2';
        case 'Full Shade':
          return 'shade3';
        default: 
          return null;
      }
    }

    return(
      <div className="left_body">
        <div className="left_header">
            <h3 className="left_title">{month}</h3> 
        </div>
        <div className="shade_bed">
        {plot.map((div, i) => (  /* creates 24 divs, index = 0 */
                <div key={i}   
                    className={`plot_div ${changeBackground(div)}`}                    
                    onMouseOver={() => setDiv(div)}> 
                        {div.name && <div className={`bed_icon ${div.color}`}>
                            <img src={`${div.icon}`} className="plant_vector"/>
                          </div>}
                </div>))} 
        </div>
      </div>
    )
}

export default PlantBed;