// Define the tour!
var tour = {
    id: "demo-tour",
    showPrevButton: true,
    steps: [       
        
        {
            title: "Apps",
            content: "This is a shortcut for your useful apps.",
            target: "apps-navbar-links",
            placement: "bottom"
        },
        {
            title: "Notification",
            content: "Check your daily notifications here.",
            target: "notification-navbar-link",
            placement: "left"
        },
        {
            title: "Customizer",
            content: "This is the customizer for the theme where you can customize menu options.",
            target: "customizer-toggle-setting",
            placement: "left"
        }        
    ]
};

// Start the tour!

$('#btnStartTour').on('click',function(e){
    hopscotch.startTour(tour);
});


