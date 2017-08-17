package api;

import dto.Player;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayerController {

    @RequestMapping("/players")
    public Player[] getAllPlayers() {
        Player [] players = new Player[1];
        players[0] = new Player(1, "test_player");
        return players;
    }
}
