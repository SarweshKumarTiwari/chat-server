import membersGroups from "../members.group.entity";
import { memberGroupType } from "../../types/memberGroupTypes";
class membersGroupsCRUD{

    //add friends or groups to database
    async addFriendsOrGroups(membertypes:memberGroupType){
        return await new membersGroups(membertypes).save();
    }
    //get friends and groups
    async getAllFriendsandGroups(id:string){
        return await membersGroups.find({id:id}).exec();
    }

    //get all friends
    async getAllFriends(id:string){
        return await membersGroups.find({id:id}).where("type").equals(0).exec();
    }

    //add member in group
    async addMemberinGroup(group_id:string,member_id:string){
        let member=await membersGroups.findById(group_id);
        member?.member.push(member_id);
        return await membersGroups.findByIdAndUpdate(group_id,{member:member?.member});
    }
    //remove member from group
    async removeMemberFromGroup(group_id:string,member_id:string){
        let member=await membersGroups.findById(group_id);
        return await membersGroups.findByIdAndUpdate(group_id,{member:member?.member.filter(e=>e!==member_id)});

    }
    //remove a friend and the messeges
    async removeFriend(id:string){
        /*
            remove messages
        */
       return await membersGroups.findByIdAndRemove(id);
    }
    //remove a group and its messeges
    async removegroup(id:string){
        /*
            remove messages
        */
       return await membersGroups.findByIdAndRemove(id);
    }
}

export default membersGroupsCRUD;