resource "aws_s3_bucket" "app_artifacts" {
   bucket = "portfolio-vue-artifacts-releases"

   tags = {
      Name        = "Portfolio Build artifacts"
      Environment = "Production"
   }
}

# Block Public Access
resource "aws_s3_bucket_public_access_block" "artifacts_block" {
   bucket = aws_s3_bucket.app_artifacts.id

   block_public_acls       = true
   block_public_policy     = true
   ignore_public_acls      = true
}

# S3 Bucket Output
output "s3_bucket_name" {
   value       = aws_s3_bucket.app_artifacts.id
   description = "S3 bucket name for artifacts build"
}