import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Avatar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  skills: string[];
  availability: string;
  matchScore: number;
}

const mockTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Project Manager",
    skills: ["Agile", "Scrum", "Risk Management"],
    availability: "Full-time",
    matchScore: 95,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "UI/UX"],
    availability: "Full-time",
    matchScore: 92,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Backend Developer",
    skills: ["Node.js", "Python", "AWS"],
    availability: "Full-time",
    matchScore: 88,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "User Research"],
    availability: "Part-time",
    matchScore: 90,
  },
  {
    id: 5,
    name: "David Wilson",
    role: "QA Engineer",
    skills: ["Testing", "Automation", "CI/CD"],
    availability: "Full-time",
    matchScore: 85,
  },
];

const TeamMatching: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          Suggested Team Members
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          Based on your project requirements, we've identified the following team members as the best matches.
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {mockTeamMembers.map((member) => (
            <Box key={member.id} sx={{ flex: '1 1 300px', minWidth: 0, maxWidth: 'calc(50% - 12px)' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                      {member.name.charAt(0)}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6">{member.name}</Typography>
                      <Typography color="text.secondary">{member.role}</Typography>
                    </Box>
                    <Chip
                      label={`${member.matchScore}% Match`}
                      color="primary"
                      size="small"
                    />
                  </Box>
                  
                  <Typography variant="subtitle2" gutterBottom>
                    Skills:
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {member.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>
                  
                  <Typography variant="subtitle2">
                    Availability: {member.availability}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View Profile
                  </Button>
                  <Button size="small" color="primary">
                    Contact
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" onClick={() => navigate('/brief')}>
            Back to Brief
          </Button>
          <Button variant="contained" color="success">
            Confirm Team Selection
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default TeamMatching; 