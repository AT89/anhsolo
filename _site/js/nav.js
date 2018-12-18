<script>
  $(document).ready(function () {
    $('#nav li').hover(
      function () {
        //show submenu
        $('ul', this).show();
      }, function () {
        //hide submenu
        $('ul', this).hide();
      });
  });
</script>