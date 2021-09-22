import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const Post = ({ post }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.firstName} {post.lastName}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image= {post.picture}
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  )
}

export default Post
