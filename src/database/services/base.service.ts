import { Repository } from 'typeorm';
import { BaseEntity } from '../entities/base.entity';
export class BaseService<T extends BaseEntity>{
	constructor(private readonly genericRepository: Repository<T>) {}
    async findAll(conditions?: any): Promise<T[] | object> {
        try {
            return await this.genericRepository.find(conditions);
        } catch (error) {
            return {success: false, message: error.message};
        }
    }
    async countAll(conditions?: any): Promise<number | object> {
        try {
            return await this.genericRepository.count(conditions);
        } catch (error) {
            return {success: false, message: error.message};
        }
    }  
    async findOne(id: number, conditions?: any): Promise<T | object> {
        try {
            return await this.genericRepository.findOne(id, conditions);
        } catch (error) {
            return {success: false, message: error.message};
        }
    }
    async create(entity: any): Promise<number | object>{
	    try {
            const newEntity: any = {};
            Object.entries(entity).forEach(([key, value]) => {
                if(typeof value === 'object') {
                    newEntity[key] = JSON.parse(JSON.stringify(value));
                } else {
                    newEntity[key] = value;
                }
            });
            const result = await this.genericRepository.save(newEntity);
            return result.id;
		} catch(error) {
			return {success: false, message: error.message};
        }
    }
    async update(id: number | object, entity: object): Promise<{success:boolean, message:string}>{
        try {
            const result = await this.genericRepository.update(id, entity);
            return {success: true, message: 'Updated successfully!'};
		} catch(error) {
            console.log(error);
			return {success: false, message: error.message};
        }
    }
    async delete(id: number): Promise<boolean | object> {
        return await this.update(id, {status:0});
    }
}