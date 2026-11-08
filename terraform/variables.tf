variable "instance_type" {
   default     = "t3.micro"
   description = "AWS EC2 Instance Type"
}

variable "key_name" {
   description = "SSH Key Pair"
   type        = string
}