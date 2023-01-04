var options = {
  zoom: {
    width: 100,
    height: 100,
    zIndex: 600,
  },
  overlay: {
    opacity: 0.65,
    zIndex: 500,
    backgroundColor: "#000000",
    fade: true,
  },
  detail: {
    zIndex: 600,
    margin: {
      top: 0,
      left: 10,
    },
    fade: true,
  },
};
jQuery(document).ready(function () {
  jQuery(".imgZoom").mooZoom(options);
});
