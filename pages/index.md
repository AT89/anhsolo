---
layout: page
title: Home
permalink: /index/
---
<div class="index">



<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>World Map | www.anhsolo.com</title>
    <link rel="stylesheet" href="{{ site.baseurl }}/leaflet/leaflet.css">
</head>
<body>

    
    <div id="mapid"></div>

    <!-- Include Leaflet library -->
    <script src="{{ site.baseurl }}/leaflet/leaflet.js"></script>
    <script>
            var map = L.map('mapid').setView([0, 0], 2); // Centered on the world, zoom level 2

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Define custom icons
            var countryIcon = L.icon({
                iconUrl: '{{ site.baseurl }}/leaflet/images/marker-icon-2x.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowUrl: '{{ site.baseurl }}/leaflet/images/marker-shadow.png',
                shadowSize: [41, 41],
                shadowAnchor: [12, 41]
            });

            // Define marker coordinates for each country
            var countries = [
                { name: 'United Kingdom', latLng: [51.5074, -0.1278] },
                { name: 'Milan, Italy', latLng: [45.4642, 9.1900] },
                { name: 'Florence, Italy', latLng: [43.7696, 11.2558] },
                { name: 'New Zealand', latLng: [-40.9006, 174.8860] },
                { name: 'Sydney, Australia', latLng: [-33.8688, 151.2093] },
                { name: 'Lame Como, Italy', latLng: [45.9646, 9.2452] },
                { name: 'Malaga, Spain', latLng: [36.7213, -4.4215] },
                { name: 'Singapore', latLng: [1.3521, 103.8198] },
                { name: 'Moscow, Russia', latLng: [55.7558, 37.6176] },
                { name: 'Tokyo, Japan', latLng: [35.6895, 139.6917] },
                { name: 'Kyoto, Japan', latLng: [35.0116, 135.7681] },
                { name: 'Kalispell, Montana', latLng: [48.2023, -114.3129] },
                { name: 'Mumbai, India', latLng: [19.0760, 72.8777] },
                { name: 'Johannesburg, South Africa', latLng: [-26.2041, 28.0473] },
                { name: 'Ho Chi Minh City, Vietnam', latLng: [10.8231, 106.6297] },
                { name: 'Riyadh', latLng: [24.7136, 46.6753] },
                { name: 'Jakarta, Indonesia', latLng: [-6.2088, 106.8456] },
                { name: 'Doha, Qatar', latLng: [25.2854, 51.5310] },
                { name: 'Belgium', latLng: [50.8503, 4.3517] },
                { name: 'Amsterdam', latLng: [52.3676, 4.9041] },
                { name: 'Tel Aviv, Israel', latLng: [32.0853, 34.7818] },
                { name: 'Seoul, South Korea', latLng: [37.5665, 126.9780] },
                { name: 'Sacramento, California', latLng: [38.5816, -121.4944] }
            ];

    
        // Add markers for each country
        countries.forEach(country => {
            var marker = L.marker(country.latLng, { icon: countryIcon }).addTo(map);
            marker.bindPopup('<b>' + country.name + '</b>');

 
        });


    </script>

    

<div id="locationlist">
{% for post in site.posts  %}
    {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

    {% if forloop.first %}
    <h2 id="{{ this_year }}-ref">{{this_year}}</h2>
    <ul>
    {% endif %}

<p>  <a href="{{ post.url | prepend: site.baseurl }}" target="_self">{{ post.date | date: '%b %d' }} - {{ post.title }}</a><br></p>

    {% if forloop.last %}
    </ul>
    {% else %}
        {% if this_year != next_year %}
        </ul>
        <h2 id="{{ next_year }}-ref">{{next_year}}</h2>
        <ul>
        {% endif %}
    {% endif %}
{% endfor %}
</div>
