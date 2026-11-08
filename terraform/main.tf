data "aws_ami" "ubuntu" {
   most_recent = true
   filter {
      name = "name"
      values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
   }
   filter {
      name = "virtualization-type"
      values = ["hvm"]
   }
   owners = ["099720109477"]
}

# Security Group (Firewall)
resource "aws_security_group" "portfolio_sg" {
   name        = "portfolio-web-sg"
   description = "Security group for Portfolio CI CD"

   # SSH Access
   ingress {
      from_port   = 22
      to_port     = 22
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
   }

   # HTTP Web Access
   ingress {
      from_port   = 80
      to_port     = 80
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
   }

   # HTTPS Web Access (for SSL)
   ingress {
      from_port   = 443
      to_port     = 443
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
   }

   # Outbound Rules
   egress {
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_blocks = ["0.0.0.0/0"]
   }
}

# Instance AWS EC2
resource "aws_instance" "portfolio_ec2" {
   ami            = data.aws_ami.ubuntu.id
   instance_type  = var.instance_type
   key_name       = var.key_name
   vpc_security_group_ids  = [aws_security_group.portfolio_sg.id]

   root_block_device {
      volume_size = 15 # 15 GB
      volume_type = "gp3"
   }

   tags = {
      Name = "Portfolio-VueJS-FreeTier"
   }
}

# EC2 Public IP Output
output "portfolio_public_ip" {
   value       = aws_instance.portfolio_ec2.public_ip
   description = "Public IP from EC2 portfolio"
}