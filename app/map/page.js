import PageTitle from "../components/Common/PageTitle"
import WrapperHalf from "../components/Common/WrapperHalf"
import CustomMap from "../components/Map/CustomMap"
import MapCard from "../components/Map/MapCard"

export default function MapPage(){
    return (
        <>
            <WrapperHalf>
                <PageTitle title="Map" variant='h5' hasBack={true}/>
            </WrapperHalf>

            <CustomMap />
        </>
    )
}