//implments the round logic and holds state of current round
//used to determine points for current round

class round_state{
    constructor(){
        this.round_count = 0;
        this.round_stage = 1;
        this.points_this_stage = 4*(this.round_stage * 3 - 2)
        this.category = ''
    }
    update_category(new_category){
        this.category = new_category;
    }

    round_ended(){
        this.round_count += 1;
        if(this.round_count % 3 == 0){
            this.round_stage += 1;
        }
    }

    round_points(position){
        switch(position){
            case position == 1:
                return this.points_this_stage;

            case position == 2:
                return 0.75*this.points_this_stage;

            case position == 3:
                return 0.5*this.points_this_stage;

            case position == 4:
                return 0.25*this.points_this_stage;
        }
    }

    



}