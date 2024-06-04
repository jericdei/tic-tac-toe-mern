ps:
    docker compose ps
logs container:
    docker compose logs {{container}}
start:
    docker compose up -d
stop:
    docker compose down
restart: stop && start
rebuild:
    docker compose up -d --build --force-recreate --remove-orphans
api:
    docker compose exec -u 1000 api npm start
app:
    docker compose exec -u 1000 app npm run dev
