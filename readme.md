docker build -t livekittest:1.0.0 .

docker run -p 5050:5050 --name kittest -d livekittest:1.0.0 .

docker logs -f kittest

add API, Secret and Host in .env

curl command to execute inside same container update HOSTNAME and TOKEN

curl --location --request POST 'https://HOSTNAME/twirp/livekit.RoomService/ListRooms' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    
}'

