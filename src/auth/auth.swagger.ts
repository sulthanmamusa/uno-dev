import { ApiModelProperty } from '@nestjs/swagger';

export class LoginReq {
  @ApiModelProperty() email: string;
  @ApiModelProperty() password: string;
}

export class RegisterReq {
  @ApiModelProperty() name: string;
  @ApiModelProperty() email: string;
  @ApiModelProperty() password: string;
}