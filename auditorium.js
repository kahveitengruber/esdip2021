const zoneList = {
    popupAuditorium1: {
        message: 'Auditorium - Zoom meeting', 
            buttons: [
                {
                    label: "Open zoom",
                    className: "popUpElement",
                    callback: (popupValue) => {
                        WA.openTab('https://us02web.zoom.us/j/86856707781?pwd=OTNDVlNQZ044c0s1MG1nWStKa3NWdz09');
                        popupValue.close();
                    }
                },
            ]
    },
    popupAuditorium2: {
        message: 'Auditorium - Zoom meeting', 
            buttons: [
                {
                    label: "Open zoom",
                    className: "popUpElement",
                    callback: (popupValue) => {
                        WA.openTab('https://zoom.us/');
                        popupValue.close();
                    }
                },
            ]
    },
    popupAuditorium3: {
        message: 'Auditorium - Zoom meeting', 
            buttons: [
                {
                    label: "Open zoom",
                    className: "popUpElement",
                    callback: (popupValue) => {
                        WA.openTab('https://zoom.us/');
                        popupValue.close();
                    }
                },
            ]
    },
    popupAuditorium4: {
        message: 'Auditorium - Zoom meeting', 
            buttons: [
                {
                    label: "Open zoom",
                    className: "popUpElement",
                    callback: (popupValue) => {
                        WA.openTab('https://zoom.us/');
                        popupValue.close();
                    }
                },
            ]
    },
};

const zoneListArray = Object.keys(zoneList);
for(let i = 0; i < zoneListArray.length; i++) {
    const index = zoneListArray[i];
    let popup = null;
    WA.onEnterZone(index, () => {
        popup = WA.openPopup(`${index}`, zoneList[index].message, zoneList[index].buttons);
    });
    WA.onLeaveZone(index, () => {
        popup.close();
    });
}