function NotificationBodyRightDrawer(){
    return(
        <>
            {
                [...Array(1)].map((_, i) => {
                    return <div key={i} className={"grid mt-3 card bg-base-200 rounded-box p-3" + (i < 5 ? " bg-blue-100" : "")}>
                            {i % 2 === 0 ? `No hay notificaciones` : `Total likes for instagram post - New launch this week,  has crossed 100k `}
                        </div> 
                })
            }
        </>
    )
}

export default NotificationBodyRightDrawer